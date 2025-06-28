import { create } from 'zustand';
import { Block } from '@/types/block';

type BlockStore = {
  blocks: Block[];
  selectedBlockId: string | null;

  setBlocks: (blocks: Block[]) => void;
  updateBlock: (id: string, newData: Partial<Block>) => void;
  setSelectedBlock: (id: string | null) => void;
  addBlock: (block: Block) => void;
};

export const useBlockStore = create<BlockStore>((set) => ({
  blocks: [
    {
      id: '1',
      type: 'TextBlock',
      content: 'Текстовый блок 1',
      styles: {
        fontSize: '24px',
        color: '#333333',
        padding: '10px',
      },
    },
  ],

  selectedBlockId: null,

  setBlocks: (blocks) => set({ blocks }),

  updateBlock: (id, newData) =>
    set((state) => ({
      blocks: state.blocks.map((block) =>
        block.id === id ? { ...block, ...newData, styles: { ...block.styles, ...newData.styles } } : block
      ),
    })),

  setSelectedBlock: (id) => set({ selectedBlockId: id }),

  addBlock: (block) =>
  set((state) => ({
    blocks: [...state.blocks, block],
  })),
}));
