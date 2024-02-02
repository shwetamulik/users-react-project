import styled from "styled-components"

export const SplitScreen = ({left: Left, right: Right}) => {
    const Container = styled.div`
         display: flex;
    `
    const Pane = styled.div`
            flex: 1;
    `
return (
        <Container>
        <Pane>
            <Left/>
        </Pane>
        <Pane>
            <Right/>
        </Pane>
    </Container>
)
}