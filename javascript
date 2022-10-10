#questao1
importar  java . útil . Scanner ;

public  class  Exerc1Lista {
    public  static  void  main ( String [] args ) {

        Scanner  sc = new  Scanner ( System . in );

         salario duplo , salarionovo , aumento , percentual ;

        Sistema . fora . ( "Digite seu salário print : R$ " );
        salario = sc . próximoDouble ();
        Sistema . fora . print ( "Digite um aumento de aumento: " );
        percentual = sc . próximoDouble ();

        aumento = ( percentual / 100 ) * salário ;
        salarionovo = salario + aumento ;

        Sistema . fora . printf ( "O novo salário com aumento é %.2f" , salarionovo );


    }
}

#questao2
importar  java . útil . Scanner ;

public  class  Exerc2Lista {
    public  static  void  main ( String [] args ) {

        Scanner  sc = new  Scanner ( System . in );

        int  num ;

        for ( int  c = 1 ; c <= 10 ; c ++) {
            Sistema . fora . print ( "Digite um numero: " );
            num = sc . nextInt ();
            if ( num % 2 == 0 ){
                Sistema . fora . println ( "Este número é PAR" );


            } if ( num % 2 == 1 ){
                Sistema . fora . println ( "Este número é ÍMPAR" );
            }

        }


    }
}


#questao3
importar  java . útil . Scanner ;

public  class  Exerc4Lista {
    public  static  void  main ( String [] args ) {

        Scanner  sc = new  Scanner ( System . in );

        dobro  litros , valor , total ;
        Sistema . fora . printn ( "Digite a quantidade de litros abastecido: " );
        litros = sc . próximoDouble ();

        valor = litros * 2,50 ;
        total = valor + ( 2 * 3 );

        Sistema . fora . println ( "O valor total da conta foi R$" + total );

    }
}

#questao4
importar  java . útil . Scanner ;

 classe  pública Exerc5Lista {
    public  static  void  main ( String [] args ) {

        Scanner  sc = new  Scanner ( System . in );
        duplo  salário , prestação ;


        Sistema . fora . ( "Digite seu salário print : R$ " );
        salario = sc . próximoDouble ();
        Sistema . fora . print ( "Digite a assinatura: R$ " );
        prestação = sc . próximoDouble ();

        if ( prestação <= 0,30 * salário ){
            Sistema . fora . println ( "Parabéns!!!Você Conseguiu a Linha de Crédito!" );
        } senão {
            Sistema . fora . println ( "Não será possível pegar a Linha de Crédito" );
            Sistema . fora . print ( "A prestação excedeu 30% do salário" );
        }
    }
}

#questao5
import java.util.Scanner;

public class Exerc6Lista {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        double nota1, nota2, media;

        int contador = 1;

        for(contador = 1; contador <= 12; contador++){
            System.out.print("Primeira nota: ");
            nota1 = sc.nextDouble();
            System.out.print("Segunda nota: ");
            contador++;
            nota2 = sc.nextDouble();
            media = sc.nextDouble();
            media = (nota1 + nota2) / 2;


        }

    }
}

#questao6
importar  java . útil . ListaMatriz ;
importar  java . útil . Scanner ;

public  class  Exerc7Lista {
    public  static  void  main ( String [] args ) {
        Scanner  sc = new  Scanner ( System . in );
        ArrayList < Double > conta = new  ArrayList ();

         dias duplos , total , diaria ;
        String  cliente , fechar ;
         total = 0 ;

       enquanto ( verdadeiro ) {
           Sistema . fora . print ( "Nome do Cliente:" );
           cliente = sc . próximo ();
           Sistema . fora . print ( "Dias: " );
           dias = sc . próximoDouble ();
           Sistema . fora . println ( "Deseja continuar? Sim ou Nao: " );
           fechar = sc . próximo ();

           if ( dias < 10 ){
               total = ( dias * 15 ) + 40 ;
           Sistema . fora . print ( "A conta do(a) Sr(a)" + cliente + "é de R$" + total );
           conta . soma ( total );

           } else  if ( dias >= 10 ) {
               total = ( dias * 8 ) + 40 ;
               Sistema . fora . println ( "A conta do(a) Sr(a)" + cliente + "é de R$" + total );
               conta . soma ( total );
           }



            if ( fechar . equals ( "Nao" ))
                quebrar ;

        }
        Sistema . fora . println ( conta );
    }
}

#questao7
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

public class ex08 {
    public static void main(String[] args) {
        ArrayList<Paciente> pacientes = new ArrayList<>();
        Scanner teclado = new Scanner(System.in);

        do {
            System.out.println("Informe o nome do paciente:");
            String nome = teclado.next();
            System.out.println("Informe o sexo do paciente:");
            String sexo = teclado.next();
            System.out.println("Informe o idade do paciente:");
            int idade = teclado.nextInt();
            System.out.println("Informe o altura do paciente:");
            double altura = teclado.nextDouble();
            System.out.println("Informe o peso do paciente:");
            double peso = teclado.nextDouble();

            Paciente paciente = new Paciente(nome, sexo, idade, altura, peso);
            pacientes.add(paciente);
        } while (!pacientes.get(pacientes.size() - 1).nome.equalsIgnoreCase("fim"));

        System.out.println("A quantidade de pacientes é: " + pacientes.size());
        System.out.println("A média de idade dos homens é: " + calcularMediaDeIdadeDosHomens(pacientes));
        System.out.println("A quantidde de mulheres com altura maior que 1,60 e menor que 1,70 e mais de 70kg é: " + calcularQuantidadeDeMulheres(pacientes));
        System.out.println("A quantidade de pessoas entre 18 e 25 anos é: " + calcularQuantidadeDePessoasJovens(pacientes));
        System.out.println("O nome do paciente mais velho: " + nomeDoPacienteMaisVelho(pacientes));
    }

    private static double calcularMediaDeIdadeDosHomens(ArrayList<Paciente> pacientes) {
        double somaDasIdades = 0;
        for (Paciente paciente : pacientes) {
            if (paciente.sexo.equalsIgnoreCase("masculino")) {
                somaDasIdades = somaDasIdades + paciente.getIdade();
            }
        }
        return somaDasIdades / pacientes.size();
    }

    private static int calcularQuantidadeDeMulheres(ArrayList<Paciente> pacientes) {
        int quantidade = 0;
        for (Paciente paciente : pacientes) {
            if (paciente.sexo.equalsIgnoreCase("feminino")
                    && paciente.altura >= 1.6
                    && paciente.altura <= 1.7
                    && paciente.peso >= 70) {
                quantidade++;
            }
        }
        return quantidade;
    }

    private static int calcularQuantidadeDePessoasJovens(ArrayList<Paciente> pacientes) {
        int quantidade = 0;
        for (Paciente paciente : pacientes) {
            if (paciente.idade >= 18 && paciente.idade <= 25) {
                quantidade++;
            }
        }
        return quantidade;
    }

    private static String nomeDoPacienteMaisVelho(ArrayList<Paciente> pacientes) {
        pacientes.sort(Comparator.comparing(Paciente::getIdade));
        Paciente pacienteMaisVelho = pacientes.get(pacientes.size() - 1);
        return pacienteMaisVelho.nome;
    }
}
