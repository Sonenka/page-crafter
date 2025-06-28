'use client';

import TextBlock from '@/components/blocks/TextBlock';
import { useBlockStore } from '@/store/blocks';

export default function Home() {
  const blocks = useBlockStore((state) => state.blocks);

  return (
    <main className="p-8">
      {blocks.map((block) => {
        if (block.type === 'TextBlock') {
          return (
            <TextBlock
              key={block.id}
              content={block.content}
            />
          );
        }

        return null;
      })}
    </main>
  );
}