import React from 'react';
import { Input, Label, Select, Button, HelperText } from '@windmill/react-ui';

export const FormCreatePendanaan = () => {
    return (
        <form>
            <div>
            <Label>
                <span>Nama</span>
            </Label>
                <Input type="number" className="mt-3" />
                <Input type="date" className="mt-6" />
                <HelperText>tanggal saja Bos !</HelperText>
                <Input aria-label="Bad" placeholder="Masukkan tanggal" className="mt-3" />
            </div>

            <Label className="mt-5">
                <span>Requested Limit</span>
                <Select className="mt-3">
                    <option>$1,000</option>
                    <option>$5,000</option>
                </Select>
            </Label>
            <Input type="checkbox" />
            <div>
                <Button className="my-3">Simpan</Button>
            </div>
        </form>
    );
};