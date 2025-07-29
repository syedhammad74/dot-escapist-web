import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface DialogBoxProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const DialogBox: React.FC<DialogBoxProps> = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {product.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eget sapien vitae turpis gravida cursus.
            </p>
            <h3 className="text-lg font-medium mb-2">Challenges</h3>
            <ul className="list-disc list-inside">
              <li>Challenge 1: Lorem ipsum dolor sit amet.</li>
              <li>Challenge 2: Consectetur adipiscing elit.</li>
              <li>Challenge 3: Quisque eget sapien vitae.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
