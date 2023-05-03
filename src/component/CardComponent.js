import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMAGE_BASE_PATH } from '@/library/key';
import { useRouter } from 'next/router';

export default function CardComponent({ title, overview, imagePath, id }) {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/movieDetail/${id}`);

    }
    return (
        <>
            <div className='p-2'>
                <Card style={{ width: '18rem', }}>
                    <Card.Img variant="top" src={ imagePath ? IMAGE_BASE_PATH + imagePath : "https://assets.nst.com.my/images/articles/03xxworld_1596384698.jpg"} />
                    <Card.Body>
                        <Card.Title>{title? title : "Card Title"}</Card.Title>
                        <Button onClick={handleClick} variant="primary">View Detail</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
