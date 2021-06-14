import React, { useEffect, useState } from 'react';

import { $getVideos } from '../../api/videos';

import GridVideo from '../../components/GridVideo';
import Container from '../../components/Common/Container';

const HomePage = () => {
  const [videos, setVideo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const res = await $getVideos();

      if (res.items) {
        setVideo(res.items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Container className="mx-auto">
      {!isLoading && <GridVideo videos={videos} />}
    </Container>
  );
};

export default HomePage;
