import "./SectionOne.css";
import Stay from "../../Assets/Images/Stay.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Triangle2 from "../../Assets/Images/triangle2.png";
import Cubes3 from "../../Assets/Images/cubes3.png";
import Circle from "../../Assets/Images/circle.png";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../Redux/Slices/postsSlice';
import ReactPaginate from 'react-paginate';

const theme = createTheme({
    palette: {
        primary: {
            main: '#742EFF',
        },
        secondary: {
            main: '#742EFF',
        },
    },
});

export const MainSectionOne = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 6; 

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    const indexOfLastPost = (currentPage + 1) * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="sectionOne">
                <div className="ourServiceContainer">
                    <div className="service" id="services">
                        <img src={Triangle2} alt="triangle2" className="triangle2" />
                        <div className="serviceBtn">Our Service</div>
                        <img src={Stay} alt="stay" height={100} />
                    </div>
                    <div className="learnMore">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis.
                            Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.
                        </p>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </div>
                </div>
                <div className="parentContainer">
                    <div className="gridContainer">
                        {status === 'loading' && <p>Loading...</p>}
                        {status === 'failed' && <p>{error}</p>}
                        {status === 'succeeded' && currentPosts.map((post) => (
                            <div key={post.id} className="gridBox">
                                <img src={Cubes3} alt="Icon" />
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        ))}
                    </div>
                    {status === 'succeeded' && (
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={Math.ceil(posts.length / postsPerPage)}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    )}
                </div>
                <div className="circle">
                    <img src={Circle} alt="" />
                </div>
            </div>
        </ThemeProvider>
    );
}
