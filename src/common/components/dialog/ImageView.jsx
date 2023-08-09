import { Dialog, DialogBody } from "@material-tailwind/react";
import React from "react";

export default function ImageView({ open, imageSrc, handleOpen = () => {} }) {
    return (
        <>
            <Dialog open={open} handler={handleOpen} size="sm">
                <DialogBody>
                    <img
                        src={imageSrc}
                        alt="image profile"
                        className="w-full h-full object-cover"
                    />
                </DialogBody>
            </Dialog>
        </>
    );
}
