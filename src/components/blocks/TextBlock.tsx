type TextBlockProps = {
  content: string;
};

export default function TextBlock({ content}: TextBlockProps) {
  return <p>{content}</p>;
}
