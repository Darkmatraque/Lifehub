export interface Note {

    id: string;

    title: string;

    content: string;

    favorite: boolean;

    tags: string[];

    createdAt: string;

    updatedAt: string;

}export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  color: 'blue' | 'yellow' | 'green' | 'red' | 'purple';
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}
