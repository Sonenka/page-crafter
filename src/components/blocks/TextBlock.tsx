type TextBlockProps = {
  content: string;
  styles: React.CSSProperties;
};

export default function TextBlock({ content, styles }: TextBlockProps) {
  return <p style={styles}>{content}</p>;
}
