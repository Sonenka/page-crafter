'use client';

import { useBlockStore } from '@/store/blocks';
import TextBlock from '@/components/blocks/TextBlock';
import StyleEditor from '@/components/ui/StyleEditor';

export default function Home() {
  const blocks = useBlockStore((state) => state.blocks);
  const setSelectedBlock = useBlockStore((state) => state.setSelectedBlock);

  return (
    <main className="p-8">
      {blocks.map((block) => (
        <div key={block.id} onClick={() => setSelectedBlock(block.id)}>
          <TextBlock content={block.content}/>
        </div>
      ))}

      <StyleEditor />
    </main>
  );
}
