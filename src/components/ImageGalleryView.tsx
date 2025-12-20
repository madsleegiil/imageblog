import type {FunctionComponent} from "react";
import type {ImageGallery} from "../posts.ts";
import {formatDateReadable} from "../utils.ts";

type Props = {
    imageGallery: ImageGallery
}

export const ImageGalleryView: FunctionComponent<Props> = ({imageGallery}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">{imageGallery.title}</h1>
            <p className="text-gray-700">{formatDateReadable(imageGallery.date)}</p>
            { imageGallery.images.map((image) =>
                <figure>
                    <img src={image.path} alt={image.alt}/>
                    { image.caption &&
                        <figcaption>
                            {image.caption}
                        </figcaption>
                    }
                </figure>
            )}
        </div>
    )
}