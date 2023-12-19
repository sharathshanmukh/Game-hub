import React from 'react';
import { Card, Skeleton, CardBody, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card width='300px'>
        <Skeleton height='200px' borderRadius={10}></Skeleton> {/* Adjust height to match GameCard's image */}
        <CardBody>
            <SkeletonText mt='4' noOfLines={2} spacing='4' /> {/* Mimic the heading and some additional text */}
            <Skeleton height='20px' mt='4' /> {/* For the platform icons */}
            <Skeleton height='20px' mt='4' width='50%' /> {/* For the critic score */}
        </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
