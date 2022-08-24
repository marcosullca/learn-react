import { useQuery } from 'react-query'

function GetQueryListUsers({ page }) {
    const getListUsers = async () => {
        const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(res => res.json())
        console.log(result)
        return result
    }

    return useQuery(['listUsers', page], getListUsers)
}

export { GetQueryListUsers }