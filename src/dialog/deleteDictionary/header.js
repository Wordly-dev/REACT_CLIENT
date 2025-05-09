import { Icon, Box } from "@components";

export const Header = () => {
  return (
    <Box flex column sx={{ height: "120px" }}>
      <Icon
        center
        grow
        icon="error"
        sx={{ color: "red" }}
        sxIcon={{ fontSize: "70px" }}
      />
    </Box>
  );
};
