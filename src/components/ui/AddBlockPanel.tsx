'use client';
import { useBlockStore } from '@/store/blocks';
import { nanoid } from 'nanoid';

export default function AddBlockPanel() {
  const addBlock = useBlockStore((s) => s.addBlock);

  const handleAddText = () => {
    addBlock({
      id: nanoid(),
      type: 'TextBlock',
      content: 'Новый заголовок',
      styles: {
        fontSize: '20px',
        color: '#000',
        padding: '8px',
      },
    });
  };

  return (
    <div className="mb-4">
      <button onClick={handleAddText}>Добавить текст</button>
    </div>
  );
}
