// 使用 Astro 内置的 markdown 支持，通过 import.meta.glob 导入所有 markdown 文件
// Astro 的 import.meta.glob 会自动解析 markdown 文件的 frontmatter
const allMarkdownModules = import.meta.glob<{
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  default: any;
}>('../content/posts/*.md', { eager: true });

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  href: string;
}

/**
 * Get all posts from the content directory
 * 使用 Astro 的 import.meta.glob 自动解析 markdown 文件
 */
export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    
    if (!module) {
      console.warn(`Failed to load module: ${filePath}`);
      continue;
    }

    // Astro 自动解析的 frontmatter
    const frontmatter = module.frontmatter || {};
    
    // 从文件路径提取 slug（文件名）
    // filePath 格式类似: ../content/posts/docker-basics.md
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    
    // 优先使用 frontmatter 中的 slug，否则使用文件名
    const slug = frontmatter.slug || fileName;
    
    if (!slug) {
      console.warn(`No slug found for file: ${filePath}`);
      continue;
    }
    
    posts.push({
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      readTime: frontmatter.readTime || '5 min read',
      image: frontmatter.image || '/assets/images/posts/post1.jpg',
      slug: slug,
      href: `/posts/${slug}`,
    });
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
}

/**
 * Get a single post by slug
 * 返回包含 Content 组件的完整对象，供动态路由使用
 */
export function getPostBySlug(slug: string): {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  Content: any;
  slug: string;
} | null {
  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    
    if (!module) {
      continue;
    }

    const frontmatter = module.frontmatter || {};
    
    // 从文件路径提取 slug（文件名）
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const fileSlug = frontmatter.slug || fileName;

    if (fileSlug === slug) {
      return {
        frontmatter,
        Content: module.default, // Astro 的 Content 组件是默认导出
        slug: fileSlug,
      };
    }
  }

  return null;
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}