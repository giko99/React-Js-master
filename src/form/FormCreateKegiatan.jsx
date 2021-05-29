import React from 'react';
import { Input, Label, Button, HelperText } from '@windmill/react-ui';

export const FormCreateKegiatan = () => {
  return (
    <form>
      <Label className="my-3">
        <span>Nama Kegiatan</span>
        <Input id="nama_kegiatan" name="nama_kegiatan" placeholder="Masukkan nama kegiatan" />
      </Label>

      <Label className="my-3">
        <span>Jenis Kegiatan</span>
        <Input id="jenis_kegiatan" name="jenis_kegiatan" placeholder="Masukkan jenis kegiatan" />
        <HelperText>jenis kegiatan harus tersedia di database eRKAM</HelperText>
      </Label>

      <Button className="my-3">Simpan</Button>
    </form>
  );
};
