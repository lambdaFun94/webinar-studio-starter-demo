export interface ProductImageProps {
  src: string;
  alt: string;
}

export const initialProps: ProductImageProps = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Picture of a pair of skis",
};

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="col-start-2 row-span-2 self-center">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
