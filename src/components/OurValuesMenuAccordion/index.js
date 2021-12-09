import * as React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllOurValues } from "../../data/data"
import { ValuePhoto } from "../ValuePhoto"



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



    return (
        <div className="mt-4 rounded-lg" >
            {
                allOurValues.map((value, index) => {
                    return (
                        <Accordion className="p-2 my-1 rounded-lg border-0 shadow-none" key={index} expanded={expanded === value.id} onChange={handleChange(value.id)}>
                            <AccordionSummary
                                className="uppercase font-bold p-0"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className="p-2" sx={{ width: '33%', flexShrink: 0 }}>
                                    {value.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className="p-2">
                                <Typography>
                                    {value.content}
                                </Typography>
                                <ValuePhoto className="mt-2" className="" value={value} />
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}