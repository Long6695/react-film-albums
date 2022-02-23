import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Rate } from 'antd';
import { useFilmsContext } from '../../context/FilmContext';
import useIsMobile from '../../hooks/useIsMobile';
const MovieDetail = () => {
  const { film, setFilm, getDetailFilmById } = useFilmsContext();
  const { Title } = Typography;
  const params = useParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    getDetailFilmById(params.id);

    return () => {
      setFilm({});
    };
    // eslint-disable-next-line
  }, [params.id]);

  const styledText = {
    color: '#fff',
    fontWeight: '400',
  };

  return (
    <>
      <Title style={styledText} level={2}>
        Film Detail
      </Title>
      <Row>
        <Col
          span={24}
          style={
            isMobile
              ? { display: 'flex', flexDirection: 'column' }
              : { display: 'flex' }
          }
        >
          <div style={{ maxWidth: '300px', marginRight: '20px' }}>
            <img
              style={{ width: '100%', objectFit: 'cover' }}
              src={film.banner}
              alt={film.title}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Title style={styledText} level={3}>
              {film.title}
            </Title>
            <p style={{ maxWidth: '600px' }}>{film.description}</p>
            <p>Views: 2,215</p>
            <Rate defaultValue={4} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetail;
