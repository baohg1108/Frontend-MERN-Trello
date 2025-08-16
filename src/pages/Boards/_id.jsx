import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardsContent/BoardContent";
import { mockData } from "~/apis/mock-data";

function Board() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: "100vh" }}>
      <AppBar></AppBar>
      <BoardBar board={mockData?.board}></BoardBar>
      <BoardContent board={mockData?.board}></BoardContent>
    </Container>
  );
}

export default Board;
