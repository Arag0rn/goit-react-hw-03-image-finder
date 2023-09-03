import { LoadMore } from "./Button.styled"

export const ButtonMore = ({onLoadMore}) => {
    return <>
    <LoadMore onClick={onLoadMore} type="button">Load more</LoadMore>
    </>
}