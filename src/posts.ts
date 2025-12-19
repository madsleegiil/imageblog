import fm from 'front-matter';

export interface Post {
    title: string;
    slug: string;
    date: string;
    imagePath: string;
    content: string;
    fileName: string;
}

const modules = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' });

export const posts: Post[] = Object.entries(modules)
    .map(([path, raw]) => {
        const parsed = fm<Post>(raw as string);
        const filenameWithoutFileFormatSuffix = path
            .split('/').pop()!.replace('.md', '');
        const dateFromFileName = filenameWithoutFileFormatSuffix.split("-")[0];
        const date = dateFromFileName.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3');

        return {
            title: parsed.attributes.title,
            slug: parsed.attributes.slug,
            date: date,
            imagePath: parsed.attributes.imagePath,
            content: parsed.body,
            fileName: filenameWithoutFileFormatSuffix
        };
    })
    .sort((a, b) => b.fileName.localeCompare(a.fileName));
