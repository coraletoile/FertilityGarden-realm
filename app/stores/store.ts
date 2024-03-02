import { create } from 'zustand';

// Define the state shape with an interface
interface ChecklistState {
  checkedStates: { [key: string]: boolean };
  toggleItem: (topicId: number, itemId: number) => void;
}

// Use the interface to type the store's state and actions
export const useChecklistStore = create<ChecklistState>((set) => ({
  checkedStates: {},
  toggleItem: (topicId: number, itemId: number) => set((state) => ({
    checkedStates: {
      ...state.checkedStates,
      [`${topicId}-${itemId}`]: !state.checkedStates[`${topicId}-${itemId}`],
    },
  })),
}));

