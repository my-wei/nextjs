/*
 * @Author: gq
 * @Date: 2022-02-12 21:58:28
 * @LastEditors: gq
 * @LastEditTime: 2022-02-12 23:55:40
 * @Description: file content
 */
import { withRouter, useRouter } from 'next/router';
const demoPage = () => {
    let router = useRouter();
    console.log(router)
    return (
        <>
            id ==={router.query.id}
            4444
        </>

    )
}

// export default withRouter(demoPage);
export default demoPage;