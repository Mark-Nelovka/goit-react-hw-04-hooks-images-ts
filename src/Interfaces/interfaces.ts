export interface buttonLoadMore {
    onClick: (e: React.MouseEvent) => void
}

interface searchNameForModal {
    id: string
    webformatURL: string
    tags: string
}

export interface FetchItemsProps {
    searchName: searchNameForModal[]
    modal: (e: number) => void 
}