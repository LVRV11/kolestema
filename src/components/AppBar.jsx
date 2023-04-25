import { Box } from "./Box";

export const AppBar = () => {
    return (
        <Box 
        display='flex' 
        alignItems='centr' 
        justifyContent='space-between' 
        as='header'
        px={4}
        py={3}
        mb={3}
        bg='primary'>
            <div>Logo</div>
            <div>UserMenu</div>
        </Box>
    );
};