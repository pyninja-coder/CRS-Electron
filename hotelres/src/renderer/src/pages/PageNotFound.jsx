
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/heading/Heading";



function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
  );
}

export default PageNotFound;
