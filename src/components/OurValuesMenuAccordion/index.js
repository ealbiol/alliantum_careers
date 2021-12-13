import * as React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllOurValues } from "../../data/data"
import { ValuePhoto } from "../ValuePhoto"
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import useTheme from "../../hooks/useTheme";
import { grey } from 'material-ui-colors';


export function OurValuesMenuAccordion() {

    const theme = useTheme();

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
        <div className="mt-4 rounded-lg block xl:hidden" >
            <div className="mt-6 mb-2">
                <h3 className="title text-md xl:w-6/12">Our values</h3>

                {
                    allOurValues.map((value, index) => {
                        return (
                            <Accordion className="p-2 my-1 border-0 shadow-none dark:bg-black dark:text-white dark:border-white" key={index} expanded={expanded === value.id} onChange={handleChange(value.id)}>
                                {
                                    theme === "dark" ?
                                        <AccordionSummary
                                            className="uppercase font-bold p-0"
                                            expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className="p-2 min-w-full" sx={{ width: '33%', flexShrink: 0 }}>
                                                {value.title}
                                            </Typography>
                                        </AccordionSummary>
                                        :
                                        <AccordionSummary
                                            className="uppercase font-bold p-0"
                                            expandIcon={<ExpandMoreIcon sx={{ color: grey[900] }} />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className="p-2 min-w-full" sx={{ width: '33%', flexShrink: 0 }}>
                                                {value.title}
                                            </Typography>
                                        </AccordionSummary>
                                }

                                <AccordionDetails className="p-2">
                                    <Typography className="pb-3 text-justify">
                                        {value.content}
                                    </Typography>
                                    <ValuePhoto value={value} />
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </div>

        </div>
    )
}