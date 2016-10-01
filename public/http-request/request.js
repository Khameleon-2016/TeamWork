var requester = {
    get(url) {
        // let promise = new Promise((resolve, reject) => {
        //         $.ajax({
        //             url: url,
        //             method: "GET",
        //         });
        //     })
        //     .done(resolve)
        //     .fail(reject);
        // return promise;

        return $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json'
        });
    },

    post(url, body) {
        // let promise = new Promise((resolve, reject) => {
        //         $.ajax({
        //             url: url,
        //             method: 'POST',
        //             contentType: 'application/json',
        //             data: JSON.stringify(body)
        //         });
        //     }).done(resolve)
        //     .fail(reject);
        // return promise;

        return $.ajax({
            url: url,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        });
    }
};

export { requester };
