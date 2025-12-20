import type {FunctionComponent} from "react";
import type {BlogPost} from "../posts.ts";
import {formatDateReadable} from "../utils.ts";
import Markdown from "react-markdown";

type Props = {
    blogPost: BlogPost
}

export const BlogPostView: FunctionComponent<Props> = ({blogPost}) => {
    return (
        <div className="blogpost">
            <h1 className="text-3xl font-bold">{blogPost.title}</h1>
            <p className="text-gray-700">{formatDateReadable(blogPost.date)}</p>
            <div className="mt-4">
                <Markdown>{blogPost.content}</Markdown>
            </div>
        </div>
    )
}