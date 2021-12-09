import * as React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllOurValues } from "../../data/data"


export function OurValuesMenuAccordion() {

    const [allOurValues, setAllOurValues] = React.useState([])

    React.useEffect(() => {
        getAllOurValues().then((result) => {
            setAllOurValues(result)
        })
    }, [])


    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [showValueCard, setShowValueCard] = React.useState(1)


    return (
        <div className="mt-4" >
            {
                allOurValues.map((value, index) => {
                    return (
                        <Accordion expanded={expanded === value.id} onChange={handleChange(value.id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {value.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.`````
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}