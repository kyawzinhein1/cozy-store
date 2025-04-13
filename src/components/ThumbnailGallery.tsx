interface Props {
  thumbnails: string[];
  activeIndex: number;
  onClick: (src: string, index: number) => void;
}

const ThumbnailGallery = ({ thumbnails, activeIndex, onClick }: Props) => (
  <div className="flex gap-3">
    {thumbnails.map((src, idx) => (
      <div
        key={idx}
        className={`border-2 ${
          idx === activeIndex ? "border-teal-600" : "border-gray-300"
        } p-1 rounded-md cursor-pointer`}
        onClick={() => onClick(src, idx)}
      >
        <img
          src={src}
          alt={`Preview ${idx}`}
          className="w-16 h-16 object-cover rounded"
        />
      </div>
    ))}
  </div>
);

export default ThumbnailGallery;
