// import { FormCreateKegiatan } from './form/FormCreateKegiatan';
import { FormCreatePendanaan } from './form/FormCreatePendanaan';
import { Card, CardBody } from '@windmill/react-ui';

export const App = () => (
  <div className="px-24 mt-3">
    <Card>
      <CardBody>
        {/* <FormCreateKegiatan /> */}
        <FormCreatePendanaan />
      </CardBody>
    </Card>
  </div>
);
