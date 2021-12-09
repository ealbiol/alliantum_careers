import * as React from "react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { getAllHeaderAndFooterSections } from "../../data/data"
import { AnchorLink } from "gatsby-plugin-anchor-links";


export default function HeaderBurgerMenu() {

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
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
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
            >
                {
                    headerUnite.map((value, index) => {
                        return (
                            <AnchorLink
                                key={index}
                                to={value.anchor}
                                style={{ color: `white`, textDecoration: `none` }}
                                className="ml-3"
                            >
                                <MenuItem onClick={handleClose}>{value.sectionName}</MenuItem>
                            </AnchorLink>
                        )
                    })
                }
            </Menu>
        </div>
    )
}