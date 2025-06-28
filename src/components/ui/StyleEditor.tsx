'use client';

import { useState, useEffect } from 'react';
import { useBlockStore } from '@/store/blocks';

export default function StyleEditor() {
  const blocks = useBlockStore((s) => s.blocks);
  const selectedId = useBlockStore((s) => s.selectedBlockId);
  const updateBlock = useBlockStore((s) => s.updateBlock);

  const block = blocks.find((b) => b.id === selectedId);
  const [color, setColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16px');

  // Когда выбираем новый блок — сбрасываем стили в редактор
  useEffect(() => {
    if (block) {
      setColor(block.styles.color || '#000000');
      setFontSize(String(block.styles.fontSize || '16px'));
    }
  }, [block]);

  if (!block) return <p>Выберите блок</p>;

  const handleApply = () => {
    updateBlock(block.id, {
      styles: {
        ...block.styles,
        color,
        fontSize,
      },
    });
  };

  return (
    <div className="p-4 border mt-4">
      <div>
        <label>
          Цвет текста:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Размер шрифта:
          <input
            type="text"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            placeholder="например, 24px"
          />
        </label>
      </div>

      <button onClick={handleApply} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Применить
      </button>
    </div>
  );
}
