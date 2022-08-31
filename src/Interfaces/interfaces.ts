export interface buttonLoadMore {
    onClick: (e: React.MouseEvent) => void
}

export interface searchNameForModal {
    id?: string | number
    webformatURL?: string
    tags?: string
}

export interface FetchItemsProps {
    searchName: searchNameForModal[]
    modal: (e: number) => void 
}

interface imageForModal {
    id: number
    largeImageURL?: string
  tags: string
}

export interface modalProps {
    onClose: () => void
    image: imageForModal[]
    id: number
}

export interface searchBarProps {
    valueSubmit: (e: string) => void
}