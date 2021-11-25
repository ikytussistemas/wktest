import { Endereco } from '../useful/endereco';

export class Customer {
  id: string;
  name: string;
  email: string
  cpf: string;
  birthday: Date;
  address: Endereco;
}
