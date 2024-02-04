import styled from "styled-components"

export const SplitScreen = ({children, leftWeight, rightWeight}) => {
    const [left, right] = children;
    const Container = styled.div`
         display: flex;
    `
    const Pane = styled.div`
            flex: ${props => props.weight};
    `
return (
        <Container>
        <Pane weight={leftWeight}>
            {left}
        </Pane>
        <Pane weight={rightWeight}>
           {right}
        </Pane>
    </Container>
)
}