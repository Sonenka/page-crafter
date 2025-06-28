'use client';
import { useBlockStore } from '@/store/blocks';

export default function StyleEditor() {
  const blocks = useBlockStore((s) => s.blocks);
  const selectedId = useBlockStore((s) => s.selectedBlockId);
  const updateBlock = useBlockStore((s) => s.updateBlock);

  const block = blocks.find((b) => b.id === selectedId);
  if (!block) return <p>Выберите блок</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateBlock(block.id, {
      styles: { ...block.styles, [name]: value },
    });
  };

  return (
    <div>
      <label>
        Цвет текста:
        <input
          name="color"
          type="color"
          value={block.styles.color}
          onChange={handleChange}
        />
      </label>
      <label>
        Размер шрифта:
        <input
          name="fontSize"
          type="text"
          value={block.styles.fontSize}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
