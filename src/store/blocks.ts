import { create } from 'zustand';
import { Block } from '@/types/block';

type BlockStore = {
  blocks: Block[];
  setBlocks: (blocks: Block[]) => void;
  updateBlock: (id: string, newData: Partial<Block>) => void;
};

export const useBlockStore = create<BlockStore>((set) => ({
  blocks: [
    {
      id: '1',
      type: 'TextBlock',
      content: 'Привет, мир!',
    },
  ],
  setBlocks: (blocks) => set({ blocks }),
  updateBlock: (id, newData) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === id ? { ...block, ...newData } : block
      ),
    })),
}));