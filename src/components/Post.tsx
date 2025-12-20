import { useParams } from "react-router-dom";
import type {BlogPost, ImageGallery} from "../posts.ts";
import {BlogPostView} from "./BlogPostView.tsx";
import {ImageGalleryView} from "./ImageGalleryView.tsx";

interface PostProps {
    posts: (BlogPost | ImageGallery)[];
}

const Post: React.FC<PostProps> = ({ posts }) => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div>
                <h1 className="text-2xl">Post ikke funnet</h1>
            </div>
        );
    }

    return (
        <div className="block w-full">
            { post.type === "blogpost" && <BlogPostView blogPost={post} />}
            { post.type === "imagegallery" && <ImageGalleryView imageGallery={post} />}
        </div>
    );
};

export default Post;
