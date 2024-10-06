describe('CRUD Operations on Trello', () => {
    const baseURl = "https://api.trello.com";
    const apikey = "317504a743a9934c3781d65a2ba38f18";
    const apiToken = "ATTAe4d17af1e18f602de087649bf69185c28cc6b2f92313c61c5f1f2102b1161098213F2294";
    const boardName1 = "On board";
    let boardId;

    it('Create a board', () => {
        cy.request({
            method: "POST",
            url: `${baseURl}/1/boards/`,
            qs: {
                name: boardName1,
                key: apikey,
                token: apiToken,
            }
        }).then(response => {
            expect(response.status).to.eql(200);
            boardId = response.body.id;
            cy.log(`Board ID: ${boardId}`);
        });
    });

    it('Update the board name', () => {
        cy.request({
            method: "PUT",
            url: `${baseURl}/1/boards/${boardId}`,
            qs: {
                name: "Updated Board Name",
                key: apikey,
                token: apiToken,
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            cy.log('Board updated successfully');
        });
    });

    it('Delete the board', () => {
        cy.request({
            method: "DELETE",
            url: `${baseURl}/1/boards/${boardId}`,
            qs: {
                key: apikey,
                token: apiToken,
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            cy.log('Board deleted successfully');
        });
    });
});

// describe('to perform crud operations on trello', () => {
//     const baseURl = "https://api.trello.com";
//     const apikey = "317504a743a9934c3781d65a2ba38f18";
//     const apiToken = "ATTAe4d17af1e18f602de087649bf69185c28cc6b2f92313c61c5f1f2102b1161098213F2294";
//     const boardName1 = "On board";
//     let id;
//     it('to create a board', () => {
        
//         cy.request({
//             method:"POST",
//             url:baseURl+"/1/boards/",
//             qs:{
//                 name:boardName1,
//                 key:apikey,
//                 token:apiToken,
//             }
//         }).then(Response => {
//             const res= JSON.parse(JSON.stringify(Response.body));
//             id=res.id;
//             expect(Response.status).to.eql(200)
//         })
//     });

//     it('to update a board', () => {
        
//         cy.request({
//             method:"PUT",
//             url:baseURl+"/1/boards/"+id,
//             qs:{
//                 name:"update",
//                 key:apikey,
//                 token:apiToken,
//             }
//         }).then(Response => {
//             const res= JSON.parse(JSON.stringify(Response.body));
//             expect(Response.status).to.eq(200)
//         })
//     });
//     it('to DELETE a board', () => {
        
//         cy.request({
//             method:"DELETE",
//             url:baseURl+"/1/boards/"+id,
//             qs:{
                
//                 key:apikey,
//                 token:apiToken,
//             }
//         }).then(Response => {
//             const res= JSON.parse(JSON.stringify(Response.body));
//             expect(Response.status).to.eq(200)
//         })
//     });
// });

