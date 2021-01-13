import React, { useEffect, useState } from 'react';
import BlogListing from './BlogListing';
import ContentPlaceholder from './ContentPlaceholder';

function BlogData(props) {

    const apiAddressRoot = "https://storage.googleapis.com/twochairs-interview-materials/interview-exercise/blog-data-1.json";

    //states
    const [blogData, setBlogData] = useState();

    //async fetches
    const fetchBlogsData = (apiAddress, currentBlogData) => {
        console.log(apiAddress);
        let dataPromise = fetch(apiAddress)
        .then(result => result.json())
        .catch(err => console.error(err));

    

    Promise.resolve(dataPromise)
        .then((fetchResponse) => {
            let blogDataList = fetchResponse.data;
            let pageLinks = fetchResponse.links;

            currentBlogData = currentBlogData === undefined ? blogDataList : currentBlogData.concat(blogDataList);

            //if link.next, fetch new page using provided address
            if (pageLinks.next !== null)
            {
                fetchBlogsData(pageLinks.next, currentBlogData);
            }
            else
            {
                console.log("Completed blog fetch");
                setBlogData(currentBlogData);
            }
        })
        .catch((err) => {
            console.error("Unable to complete blog data fetch: " + `${err}`)
        });
    }

    useEffect(() => {
        fetchBlogsData(apiAddressRoot);
        }, [])

    return (
        <div>
            { blogData !== undefined ? (
                <div className="blogData">
                    {
                        blogData.map((blogInfo, idx) => 
                        {
                            return <BlogListing
                                key={blogInfo.id}
                                id={blogInfo.id}
                                image={blogInfo.image}
                                date_created={blogInfo.date_created}
                                title={blogInfo.title}
                                author={blogInfo.author}>
                            </BlogListing>
                        })
                    }
                </div>) : (<ContentPlaceholder/>)
            }
        </div>
    );
}

export default BlogData;