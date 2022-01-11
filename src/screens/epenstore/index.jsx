import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Dropdown,
    // Form,FormControl,Button 
} from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import Book from "./book";
import './style.css';

function Epenstore() {

    const Category = [
        {name:'All Catergories', value: null},
        {name:'School Workbook', value:'concept'},
        {name:'Supplemental Workoooks', value:'foundation'},

    ];
    const Subject = [
        {name:'All Subjects', value :null},
        {name:'Math', value:'math'},
        // {name:'Science', value:'science'},
        {name:'English', value:'english'},
        {name:'Chemistry', value:'chemistry'},
        {name:'Physics', value:'physics'},
        {name:'Others', value:'others'},
    ];

    //API model of Workbooks
    const book = [
        {
            imgSrc:['./assets/booksample/Foundation Math.jpg','./assets/booksample/Foundation Math (1).jpg','./assets/booksample/Foundation Math (2).jpg','./assets/booksample/Foundation Math (3).jpg'],
            uid:'0',
            categories:'concept',
            title:'Epen Foundation and PreCal 10',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'10',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Foundation Math 10.jpg','./assets/booksample/Foundation Math 10 (1).jpg','./assets/booksample/Foundation Math 10 (2).jpg','./assets/booksample/Foundation Math 10 (3).jpg'],
            uid:'1',
            categories:'foundation',
            title:'Epen Foundation Math 10',
            blurb:'Building intuitive Skill',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'10',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Foundation Math 11.jpg','./assets/booksample/Foundation Math 11 (1).jpg','./assets/booksample/Foundation Math 11 (2).jpg','./assets/booksample/Foundation Math 11 (3).jpg'],
            uid:'2',
            categories:'foundation',
            title:'Foundation Math 11',
            blurb:'Building intuitive Skill',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'11',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Foundation Math 12.jpg','./assets/booksample/Foundation Math 12 (1).jpg','./assets/booksample/Foundation Math 12 (2).jpg','./assets/booksample/Foundation Math 12 (3).jpg'],
            uid:'3',
            categories:'foundation',
            title:'Foundation Math 12',
            blurb:'Building intuitive Skill',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'12',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Science Chem.jpg','./assets/booksample/Science Chem (1).jpg','./assets/booksample/Science Chem (2).jpg','./assets/booksample/Science Chem (3).jpg'],
            uid:'4',
            categories:'foundation',
            title:'Epen Science: Chemistry 11 and 12',
            blurb:'Building intuitive Skill',
            subject:'Chemistry',
            author:'DataPi',
            publisher:'DataPi',
            grade:'11',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Science Physics.jpg','./assets/booksample/Science Physics (1).jpg','./assets/booksample/Science Physics (2).jpg','./assets/booksample/Science Physics (3).jpg'],
            uid:'5',
            categories:'foundation',
            title:'Epen Science: Physics 11 and 12',
            blurb:'Building intuitive Skill',
            subject:'Physics',
            author:'DataPi',
            publisher:'DataPi',
            grade:'11',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/Language Chinese.jpg','./assets/booksample/Language Chinese (1).jpg','./assets/booksample/Language Chinese (2).jpg','./assets/booksample/Language Chinese (3).jpg'],
            uid:'6',
            categories:'foundation',
            title:'Epen Language Chinese 9',
            subject:'Others',
            author:'Winki',
            publisher:'DataPi',
            grade:'9',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/SAT-linear.jpg','./assets/booksample/SAT-linear (1).jpg','./assets/booksample/SAT-linear (2).jpg','./assets/booksample/SAT-linear (3).jpg'],
            uid:'7',
            categories:'foundation',
            title:'SAT Testprep: Linear Equation',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'13',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/SAT-nonlinear.jpg','./assets/booksample/SAT-nonlinear (1).jpg','./assets/booksample/SAT-nonlinear (2).jpg','./assets/booksample/SAT-nonlinear (3).jpg'],
            uid:'8',
            categories:'foundation',
            title:'SAT Testprep: Non-Linear Equation',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'13',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/SAT-geometry.jpg','./assets/booksample/SAT-geometry (1).jpg','./assets/booksample/SAT-geometry (2).jpg','./assets/booksample/SAT-geometry (3).jpg'],
            uid:'9',
            categories:'foundation',
            title:'SAT Testprep: Geometry',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'13',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },
        {
            imgSrc:['./assets/booksample/SAT-data.jpg','./assets/booksample/SAT-data (1).jpg','./assets/booksample/SAT-data (2).jpg','./assets/booksample/SAT-data (3).jpg'],
            uid:'10',
            categories:'foundation',
            title:'SAT Testprep: Data Analysis',
            subject:'Math',
            author:'DataPi',
            publisher:'DataPi',
            grade:'13',
            priceMonthly:'1.99',
            priceYearly:'17.91',
            printingPrice:'3000',
            printinConLength:'5',
            desc:'',
        },

    ]
    const [category, setCategory] = useState(['All Categories', null])
    const [subject, setSubject] = useState(['All Subject', null])
    const [grade, setGrade] = useState(['All Grade', null])


    const Categories = Category.map((item, index)=>
        <Dropdown.Item key={index} className='text-white' onClick={()=>enableFilter('category',item)}>{item.name}</Dropdown.Item>
        )
    const Subjects = Subject.map((item, index)=>
        <Dropdown.Item key={index} className='text-white' onClick={()=>enableFilter('subject',item)}>{item.name}</Dropdown.Item>
        )
    const Grades = [];
        for(let i = 1 ; i < 13; i++) {
            Grades.push(<Dropdown.Item className='text-white' key={i} href="" onClick={()=>enableFilter('grade',[i, i.toString()])}>{i}</Dropdown.Item>)
        }
    

    const enableFilter = (type, item) => {
        if(type === 'category'){
            setCategory([item.name, item.value])
        }else if(type === 'subject'){
            setSubject([item.name, item.value])
        }else if(type === 'grade'){
            setGrade([item[0], item[1]])
        }
    }
    const resetFilter = () =>{
        setCategory(['All Categories', null])
        setSubject(['All Subject', null])
        setGrade(['All Grade', null])
    }

    let filter = {
        categories: category[1],
        subject: subject[1],
        grade: grade[1],
    }

    const BooksFiltered = book.filter((item) => {
            //triple filter
            if(filter['categories'] !== null && filter['subject'] !== null && filter['grade'] !== null){
                if(filter['categories'] !== item['categories'].toLowerCase() || filter['subject'] !== item['subject'].toLowerCase() || (filter['grade'] !== null && filter['grade'] !== item['grade'])){
                    return false;
                }
                return item;

            }else if(filter['categories'] !== null || filter['subject'] !== null || filter['grade'] !== null) {

                //double filter
                if((filter['categories'] !== null && filter['subject'] !== null) || (filter['grade'] !== null && filter['categories'] !== null) || (filter['subject'] !== null && filter['grade'] !== null)){
                    if(
                        (filter['grade'] !== item['grade'].toLowerCase() &&
                        filter['categories'] !== item['categories'].toLowerCase()) ||

                        (filter['grade'] !== item['grade'].toLowerCase() &&
                        filter['subject'] !== item['subject'].toLowerCase()) ||

                        (filter['categories'] !== item['categories'].toLowerCase() &&
                        filter['subject'] !== item['subject'].toLowerCase())

                    ){
                        return false;
                    }

                //single filter
                }else if(
                    (filter['grade'] !== item['grade'] &&
                    filter['categories'] !== item['categories'].toLowerCase() && 
                    filter['subject'] !== item['subject'].toLowerCase()) ||

                    (filter['grade'] !== null && filter['grade'] !== item['grade'] &&
                    filter['categories'] !== item['categories'].toLowerCase()) ||

                    (filter['grade'] !== null && filter['grade'] !== item['grade'] &&
                    filter['subject'] !== item['subject'].toLowerCase())
                ){
                    return false;
                }
                return item;
            }
            return item


        }).map((book, index)=>
            <Book
                key = {index}
                uid = {book.uid}
                imgSrc = {book.imgSrc}
                title = {book.title}
                blurb={book.blurb}
                subject = {book.subject}
                grade = {book.grade}
                author = {book.author}
                publisher = {book.publisher}
                desc = {book.desc}
                priceMonthly = {book.priceMonthly}
                priceYearly = {book.priceYearly}
                printingPrice ={book.printingPrice}
                printinConLength = {book.printinConLength}

            />
        )


    return( 
        <div className='' style={{background:'#A5BCC9'}}>
            <div className={`vh-100 mx-auto bg-white d-flex flex-column justify-content-center position-relative drop-shadow ${isTablet||isMobile? 'w-100':'w-75'}`}>
                <div className='second-font d-flex align-items-end justify-content-centers pt-3 pb-2 w-100' style={{height: isTablet? '10vh':`${isMobile&&!isTablet?'25vh':'15vh'}`}}>
                    <div className={`${isMobile&&!isTablet? 'mx-auto':'ms-auto pe-1 me-5'}`}>
                        <div className={`'m-0 mx-auto justify-content-around' ${isMobile&&!isTablet? 'row w-75 justify-content-center align-items-center':'d-flex'}`}>
                            <Dropdown className='p-0 mb-1 mx-1 col'>
                            <Dropdown.Toggle className='me-2 input-darker border-0 w-100'>
                                {category[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-secondary'>
                                {Categories}
                            </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='p-0 mb-1 mx-1 col'>
                            <Dropdown.Toggle className='me-2 input-darker border-0 w-100'>
                                {subject[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-secondary'>
                                {Subjects}
                            </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className='p-0 mb-1 mx-1 col'>
                            <Dropdown.Toggle className='me-2 input-darker border-0 w-100'>
                                {grade[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-secondary'>
                                <Dropdown.Item className='text-white' key={0} href="" onClick={()=>setGrade(['All Grade', null])}>all</Dropdown.Item>
                                {Grades}
                                <Dropdown.Item className='text-white' key={13} href="" onClick={()=>setGrade(['Other', 13])}>other</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <Button className='bg-white border-0 m-0 text-black text-center p-0 mb-1 mx-3 col' onClick={()=>resetFilter()}>
                                Reset
                            </Button>
                            {/* <Form className="d-flex me-2">
                                <FormControl
                                    type="search"
                                    placeholder="Enter Book Name"
                                    className="me-2 input-darker"
                                    aria-label="Search"
                                />
                                <Button className="bg-304d73 border-0 px-5 prime-font">Search</Button>
                            </Form> */}
                        </div>
                    </div>
                </div>
                <div className='mx-3 row position-relative overflow-auto custom-scrollbar' style={{height:isTablet? '80vh':`${isMobile&&!isTablet?'85vh':'78vh'}`}}>
                    {BooksFiltered}
                </div>
            </div>
        </div>
    )
}

export default Epenstore