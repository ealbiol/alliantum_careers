import * as React from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { getAllHeaderAndFooterSections } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { grey } from 'material-ui-colors';
import useTheme from "../../hooks/useTheme";


export default function HeaderBurgerMenu() {

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [headerUnite, setHeaderUnite] = React.useState([])

    React.useEffect(() => {
        getAllHeaderAndFooterSections().then((result) => {
            setHeaderUnite(result)

        })
    }, [])



    return (
        <div className="flex items-center">
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="pl-2 pr-0"
            >
                {
                    theme === "dark" ?
                        <MenuIcon sx={{ color: grey[50] }} />
                        :
                        <MenuIcon sx={{ color: grey[900] }} />
                }
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ boxShadow: 0 }}
                anchorEl={anchorEl}
                marginThreshold={0}
                PaperProps={{
                    style: {
                        width: "100%",
                        maxWidth: "100%",
                        left: 0,
                        right: 0,
                    }
                }}
                anchorOrigin={{ vertical: "bottom" }}
                transformOrigin={{ vertical: "top" }}
            >
                {
                    headerUnite.map((value, index) => {
                        return (
                            <AnchorLink
                                key={index}
                                to={value.anchor}
                                style={{ color: `white`, textDecoration: `none` }}
                                className="py-3"
                            >
                                <MenuItem style={{ padding: "20px", backgroundColor: "white text-black dark:black dark:-text-white" }} className="bg-white dark:bg-cojgril" onClick={handleClose}>{value.sectionName}</MenuItem>
                            </AnchorLink>
                        )
                    })
                }
            </Menu>
        </div>
    )
}





