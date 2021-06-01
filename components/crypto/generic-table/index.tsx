import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const ReactCollapsingTable: any = dynamic(
  () => import('react-collapsing-table'),
  {
    ssr: false,
  },
);

const rows = [
  {
    id: 1,
    firstName: 'Paul',
    lastName: 'Darragh',
    market: 'lowo',
    value: 'ewe',
  },
  {
    id: 2,
    firstName: 'Paul',
    lastName: 'Darragh',
    market: 'lowo',
    value: 'ewe',
  },
  {
    id: 3,
    firstName: 'Paul',
    lastName: 'Darragh',
    market: 'lowo',
    value: 'ewe',
  },
];
const columns = [
  {
    accessor: 'firstName',
    label: 'First Name',
    priorityLevel: 1,
    position: 1,
    minWidth: 300,
  },
  {
    accessor: 'lastName',
    label: 'Last Name',
    priorityLevel: 2,
    position: 2,
    minWidth: 300,
  },
  {
    accessor: 'market',
    label: 'Market',
    priorityLevel: 3,
    position: 3,
    minWidth: 300,
  },
  {
    accessor: 'market',
    label: 'Value',
    priorityLevel: 4,
    position: 4,
    minWidth: 300,
  },
];

const GenericTable: FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(containerRef);
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      const width = containerRef.current.offsetWidth;
      console.log({ height, width });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        const width = containerRef.current.offsetWidth;
        console.log({ height, width });
      }
    });
  });

  return (
    <HRTableContainer ref={containerRef}>
      <ReactCollapsingTable rows={rows} columns={columns} />
    </HRTableContainer>
  );
};

const HRTableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0.3rem 0.3rem;
  box-shadow: 5px 10px 5px #eeeeee;
  & td,
  & th {
    padding-left: 10%;
    padding-right: 10%;
  }
  & body {
    border: 1px solid #ccc;
  }
  .react-collapsible * {
    font-size: 12px;
  }
`;

export default GenericTable;
