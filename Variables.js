/* 

                [ Variables ]   => المتغيرات 

                                       : القواعد العامة لتكوين أسماء المتغيرات هي    

                يمكن أن تحتوي الأسماء على أحرف وأرقام وشرطات سفلية وعلامات الدولار
                                                      يجب أن تبدأ الأسماء بحرف
                                               _ يمكن أن تبدأ الأسماء أيضًا بـ $ و 
                              (y و Y متغيرات مختلفة) الأسماء حساسة لحالة الأحرف 
         كأسماء (مثل كلمات JavaScript الأساسية) لا يمكن استخدام الكلمات المحجوزة                                    






       
*/

/* [ =========================================================================================== ] */

/*       Examples :      */

var x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

var a, b, c;     // Declare 3 variables
a = 5;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b;       // Assign the sum of a and b to c

var a, b, c;
a = 5; b = 6; c = a + b;

var Test1 = "Ak1";
var Test2="Ak2";






/*


  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function



*/






+                          	Addition
-                          	Subtraction
*	                           Multiplication
**	                           Exponentiation (ES2016)
/	                           Division
%                             Modulus (Division Remainder)
++	                           Increment
-- 	                        Decrement


=	             x = y	            x = y
+=	             x += y	            x = x + y
-=	             x -= y	            x = x - y
*=              x *= y	            x = x * y
/=	             x /= y	            x = x / y
%=       	    x %= y	            x = x % y
**=	          x **= y        	   x = x ** y



==	                        equal to
===	                     equal value and equal type
!=	                        not equal
!==	                     not equal value or not equal type
>	                        greater than
<	                        less than
>=	                        greater than or equal to
<=	                        less than or equal to
?	                        ternary operator



&&	                        logical and
||	                        logical or
!	                        logical not